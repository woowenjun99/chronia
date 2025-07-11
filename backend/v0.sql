-- Main purpose is for liking and commenting
CREATE TABLE users (
	date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	email TEXT NOT NULL UNIQUE,
	timezone TEXT NOT NULL DEFAULT 'Asia/Singapore',
	uid TEXT PRIMARY KEY,
	username TEXT NOT NULL UNIQUE
);

CREATE TABLE blogs (
	content TEXT NOT NULL,
	date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	description TEXT NOT NULL,
	id BIGSERIAL PRIMARY KEY,
	tags TEXT,
	title VARCHAR(50) NOT NULL,
	uid TEXT NOT NULL REFERENCES users ON DELETE CASCADE
);

CREATE TABLE comments (
    blog_id BIGSERIAL NOT NULL REFERENCES blogs ON DELETE CASCADE,
	date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	description TEXT NOT NULL,
    id BIGSERIAL PRIMARY KEY,
    uid TEXT NOT NULL REFERENCES users ON DELETE CASCADE
);


CREATE TABLE likes (
    blog_id BIGSERIAL REFERENCES blogs ON DELETE CASCADE,
    comment_Id BIGSERIAL REFERENCES comments ON DELETE CASCADE,
	date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	date_updated TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    id BIGSERIAL PRIMARY KEY,
    uid TEXT NOT NULL REFERENCES users ON DELETE CASCADE
);

