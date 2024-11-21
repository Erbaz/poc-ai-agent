const DESCRIBE_TABLE = (tableName) => `DESCRIBE ${tableName};`;

const DESCRIBE_TABLE_RELATIONS = (tableName) =>
  `SELECT
    'References' AS RelationshipType,
    kcu.TABLE_NAME AS ReferencingTable,
    kcu.COLUMN_NAME AS ReferencingColumn
FROM
    INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS AS rc
INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS kcu
    ON rc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
WHERE rc.REFERENCED_TABLE_NAME = '${tableName}'

UNION ALL

SELECT
    'Referenced By' AS RelationshipType,
    kcu.REFERENCED_TABLE_NAME AS ReferencingTable,
    kcu.COLUMN_NAME AS ReferencingColumn
FROM
    INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS AS rc
INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS kcu
    ON rc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
WHERE rc.TABLE_NAME = '${tableName}';`;

module.exports = { DESCRIBE_TABLE_RELATIONS, DESCRIBE_TABLE };
