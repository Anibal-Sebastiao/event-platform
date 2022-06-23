export interface ILesson {
    id?: string,
    title: string,
    slug: string,
    availableAt: string | Date,
    lessonType: 'class' | 'live'
}

export interface lessonQueryResponse{
    lessons: ILesson[] 
}