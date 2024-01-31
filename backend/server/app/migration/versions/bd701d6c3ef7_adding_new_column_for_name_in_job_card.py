"""Adding new column for name in job card

Revision ID: bd701d6c3ef7
Revises: cda8bacaba42
Create Date: 2024-01-31 21:24:41.994272

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'bd701d6c3ef7'
down_revision: Union[str, None] = 'cda8bacaba42'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.add_column('jobs', sa.Column('name', sa.String(), nullable=False))

def downgrade():
    op.drop_column('jobs', 'name')

