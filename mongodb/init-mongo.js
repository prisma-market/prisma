// MongoDB 초기 설정
db = db.getSiblingDB("prisma_market");

// auth_data 컬렉션 설정 유지
db.createCollection("auth_data");
db.auth_data.createIndex({ email: 1 }, { unique: true });

// users 컬렉션 생성 및 인덱스 설정
db.createCollection("users");
db.users.createIndex({ auth_id: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex(
  { username: "text", first_name: "text", last_name: "text" },
  { weights: { username: 3, first_name: 2, last_name: 1 } }
);
