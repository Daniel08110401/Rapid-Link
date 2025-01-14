-- Create Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,              -- Unique user ID
    role SMALLINT NOT NULL,             -- Role (e.g., 0 = user, 1 = admin)
    first_name VARCHAR(255) NOT NULL,   -- First name
    last_name VARCHAR(255) NOT NULL,    -- Last name
    email VARCHAR(255) UNIQUE NOT NULL, -- Email (must be unique)
    password TEXT NOT NULL,             -- Hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Created timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Updated timestamp
);

-- Create Job Types Table
CREATE TABLE job_types (
    id SERIAL PRIMARY KEY,              -- Unique job type ID
    job_type_name VARCHAR(255) NOT NULL, -- Name of the job type
    user_id INT REFERENCES users(id) ON DELETE SET NULL, -- Admin who added the type
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Job Data Table
CREATE TABLE job_data (
    id SERIAL PRIMARY KEY,              -- Unique job data ID
    available BOOLEAN DEFAULT TRUE,     -- Job availability
    company VARCHAR(255) NOT NULL,      -- Company name
    title VARCHAR(255) NOT NULL,        -- Job title
    description TEXT,                   -- Job description
    job_type_id INT REFERENCES job_types(id) ON DELETE CASCADE, -- Job type reference
    location VARCHAR(255),              -- Job location
    deadline DATE,                      -- Application deadline
    user_id INT REFERENCES users(id) ON DELETE SET NULL, -- Admin who added the job
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Posts Table
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,              -- Unique post ID
    title VARCHAR(255) NOT NULL,        -- Post title
    body TEXT NOT NULL,                 -- Post content
    user_id INT REFERENCES users(id) ON DELETE CASCADE, -- Author of the post
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Comments Table
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,              -- Unique comment ID
    message TEXT NOT NULL,              -- Comment content
    user_id INT REFERENCES users(id) ON DELETE CASCADE, -- User who commented
    post_id INT REFERENCES posts(id) ON DELETE CASCADE, -- Related post
    parent_id INT REFERENCES comments(id) ON DELETE CASCADE, -- Parent comment for nested comments
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Likes Table
CREATE TABLE likes (
    id SERIAL PRIMARY KEY,              -- Unique like ID
    user_id INT REFERENCES users(id) ON DELETE CASCADE, -- User who liked
    comment_id INT REFERENCES comments(id) ON DELETE CASCADE, -- Liked comment
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_comment_like UNIQUE (user_id, comment_id) -- Ensures one like per user per comment
);
