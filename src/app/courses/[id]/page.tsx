"use client"
import courseData from "@/data/music_courses.json"
import Image from "next/image";

interface Params {
    params: {
        id: string
    }
}


export default function Page({ params }: Params) {

    const { id } = params;

    const course = courseData.courses.find((course) => course.slug === id);

    return (
        <div className="min-h-screen bg-black/95 py-12 pt-36">
            {course &&
                <>
                    <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-3 text-white">{course.title}</h1>
                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-7 border  ">
                            <div className="text-xl font-bold text-neutral-600 dark:text-white">{course.title}</div>
                            <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">{course.description}</p>
                            <Image
                                src={course.image}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt={course.title}
                            />
                            <div className="flex justify-between items-center mt-20">
                                <button className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">Try now →</button>
                                <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">Sign up</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}   