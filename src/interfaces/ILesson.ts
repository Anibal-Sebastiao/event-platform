export interface ILesson {
    id?: string,
    title: string,
    slug: string,
    availableAt: string | Date,
    lessonType: 'class' | 'live'
}

export interface IGetLessonQueryResponse{
    lessons: ILesson[] 
}

export interface IGetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            avatarURL: string;
            bio: string;
            name: string;
        }
    }
}