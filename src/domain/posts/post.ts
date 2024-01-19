type PostID = number;

type PostCoverFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
};

type PostCoverAttributes = PostCoverFormat & {
    alternativeText: string;
    caption: string;
    formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
    };
    previewUrl: null;
    provider: string;
    createdAt: string;
    updatedAt: string;
};

type PostCover = {
    data: {
        id: PostID;
        attributes: PostCoverAttributes;
    };
};

type Attributes = {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

type PostAuthor = {
    data: {
        id: PostID;
        attributes: Attributes;
    };
};

type PostCategory = PostAuthor;

type PostAttributes = {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: PostAuthor;
    category: PostCategory;
    cover: PostCover;
};

export type PostData = {
    id: PostID;
    attributes: PostAttributes;
};

export interface getPostsData {
    data: PostData[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
