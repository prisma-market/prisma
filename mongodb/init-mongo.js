// MongoDB 초기 설정
db = db.getSiblingDB("prisma_market");

// auth_data 컬렉션 생성
db.createCollection("auth_data");

// 유니크 인덱스 생성
db.auth_data.createIndex({ email: 1 }, { unique: true });