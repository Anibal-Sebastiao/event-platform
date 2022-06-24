import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format, parse } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ILesson } from '../interfaces/ILesson';
import { Link } from 'react-router-dom';

export default function Lesson(props: ILesson) {
    const isLessonAvaliable = isPast(new Date(props.availableAt));
    const avaliableDateFormated = format(new Date(props.availableAt), "EEEE '•' d 'de' MMMM '•' k'h'mm", {
        locale: ptBR
    })

    return (
        <Link to={`/event/lesson/${props.slug}`}>
            <span className="text-gray-300">
                {avaliableDateFormated}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                <header className="flex items-center justify-between">
                    {isLessonAvaliable ? 
                        ( <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/> Conteúdo Liberado
                          </span> ): 
                        ( <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/> Em breve
                          </span> )
                    }
                    <span className="text-sx rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                        {props.lessonType === 'live'? 'AO VIVO': 'AULA PRATICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block"> {props.title}</strong>
            </div>

        </Link>
    )
}