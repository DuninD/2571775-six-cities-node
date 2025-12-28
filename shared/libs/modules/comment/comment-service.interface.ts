import { DocumentExists } from '../../../types/document-exists.interface.js';
import { CreateCommentDto, CommentEntity } from './index.js';
import { DocumentType } from '@typegoose/typegoose';

export interface CommentService extends DocumentExists {
  create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;
  findById(id: string): Promise<DocumentType<CommentEntity> | null>;
  findAll(): Promise<DocumentType<CommentEntity>[]>;
  findByOfferId(offerId: string): Promise<DocumentType<CommentEntity>[]>
}
