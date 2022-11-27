from __future__ import annotations

from fastapi import HTTPException, Response
from pydantic import UUID4
from sqlalchemy.ext.asyncio import AsyncSession

from app.models import NewsCreate, NewsGet, NewsPatch
from app.repositories import NewsRepository


class NewsService:
    @staticmethod
    async def create(db: AsyncSession, model: NewsCreate) -> NewsGet:
        news = await NewsRepository.create(db, model)
        return NewsGet.from_orm(news)

    @staticmethod
    async def get_all(db: AsyncSession, offset: int = 0, limit: int = 100) -> list[NewsGet]:
        news = await NewsRepository.get_all(db, offset=offset, limit=limit)
        if news is None:
            raise HTTPException(404, "Новости не найдены")
        return [NewsGet.from_orm(n) for n in news]

    @staticmethod
    async def get(db: AsyncSession, guid: UUID4) -> NewsGet:
        news = await NewsRepository.get(db, guid)
        if news is None:
            raise HTTPException(404, "Новость не найдена")
        return NewsGet.from_orm(news)

    @staticmethod
    async def update(db: AsyncSession, guid: UUID4, model: NewsCreate) -> NewsGet:
        news = await NewsRepository.update(db, guid, model)
        if news is None:
            raise HTTPException(404, "Новость не найдена")
        return NewsGet.from_orm(news)

    @staticmethod
    async def patch(db: AsyncSession, guid: UUID4, model: NewsPatch) -> NewsGet:
        news = await NewsRepository.patch(db, guid, model)
        if news is None:
            raise HTTPException(404, "Новость не найдена")
        return NewsGet.from_orm(news)

    @staticmethod
    async def delete(db: AsyncSession, guid: UUID4) -> Response(status_code=204):
        await NewsRepository.delete(db, guid)
        return Response(status_code=204)

    @staticmethod
    async def like(db: AsyncSession, guid: UUID4) -> NewsGet:
        news = await NewsRepository.like(db, guid)
        if news is None:
            raise HTTPException(404, "Новость не найдена")
        return NewsGet.from_orm(news)

    @staticmethod
    async def dislike(db: AsyncSession, guid: UUID4) -> NewsGet:
        news = await NewsRepository.dislike(db, guid)
        if news is None:
            raise HTTPException(404, "Новость не найдена")
        return NewsGet.from_orm(news)
