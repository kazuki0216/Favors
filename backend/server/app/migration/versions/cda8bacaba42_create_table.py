"""create table

Revision ID: cda8bacaba42
Revises: 
Create Date: 2024-01-30 20:42:31.635820

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cda8bacaba42'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Create user table
    op.create_table('user',
        sa.Column('user_id', sa.String(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.PrimaryKeyConstraint('user_id')
    )
    # Create jobs table
    op.create_table('jobs',
        sa.Column('user_id', sa.String(), nullable=True),
        sa.Column('job_id', sa.String(), nullable=False),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('description', sa.String(), nullable=False),
        sa.Column('location', sa.String(), nullable=False),
        sa.Column('coordinates', sa.String(), nullable=False),
        sa.Column('price', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.String(), nullable=False),
        sa.Column('is_complete', sa.Boolean(), nullable=True),
        sa.PrimaryKeyConstraint('job_id'),
        sa.UniqueConstraint('job_id')
    )
    # Create bookmark table
    op.create_table('bookmark',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('job_id', sa.String(), sa.ForeignKey('jobs.job_id')),
        sa.Column('user_id', sa.String(), nullable=True)
    )
    # Create messages table
    op.create_table('messages',
        sa.Column('id', sa.Integer(), primary_key=True, nullable=False),
        sa.Column('messageId', sa.String(), nullable=False),
        sa.Column('message', sa.Text(), nullable=False),
        sa.Column('senderId', sa.String(), nullable=False),
        sa.Column('receiverId', sa.String(), nullable=False),
        sa.Column('timestamp', sa.String(), nullable=False)
    )

def downgrade() -> None:
    op.drop_table('messages')
    op.drop_table('bookmark')
    op.drop_table('jobs')
    op.drop_table('user')
