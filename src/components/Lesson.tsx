import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format, parse } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ILesson } from '../interfaces/ILesson';
import { Link, useParams } from 'react-router-dom';

export default function Lesson(props: ILesson) {

    const { slug } = useParams<{ slug: string }>()
    
    const isLessonAvaliable = isPast(new Date(props.availableAt));
    const avaliableDateFormated = format(new Date(props.availableAt), "EEEE '•' d 'de' MMMM '•' k'h'mm", {
        locale: ptBR
    })

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`}>
            <span className="text-gray-300">
                {avaliableDateFormated}
            </span>

            <div className={`rounded border p-4 mt-2 ${isActiveLesson ? 'border-white bg-green-500':'border-gray-500 group-hover:border-green-500'}` }>
                <header className="flex items-center justify-between">
                    {isLessonAvaliable ? 
                        ( <span className={`font-medium flex items-center gap-2 text-sm ${isActiveLesson ? 'text-white':'text-blue-500'}`}>
                            <CheckCircle size={20}/> Conteúdo Liberado
                          </span> ): 
                        ( <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/> Em breve
                          </span> )
                    }
                    <span className={`text-sx rounded px-2 py-[0.125rem] text-white border font-bold ${isActiveLesson ? 'border-white':'border-green-300'}`}>
                        {props.lessonType === 'live'? 'AO VIVO': 'AULA PRATICA'}
                    </span>
                </header>
                <strong className={`mt-5 block ${isActiveLesson ? 'text-white':'text-gray-200'}`}> {props.title}</strong>
            </div>

        </Link>
    )
}