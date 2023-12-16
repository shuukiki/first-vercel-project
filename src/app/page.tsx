"use client"
import{ useState } from "react"

type task = {
  id:number
  title:string
  end_date:string
  done:boolean
}

const demoTasks: task[] = [
  {
    id: 1,
    title: "牛乳を買う",
    end_date: "2021-05-31",
    done: false,
  },
  {
    id: 2,
    title: "本を読む",
    end_date: "2021-06-30",
    done: true,
  },
  {
    id: 3,
    title: "ゴミを出す",
    end_date: "2021-06-30",
    done: true,
  },
]

export default function page() {

  const [tasks, setTasks] = useState<task[]>(demoTasks)

  return (
<div className="p-8">
  <h1 className="mb-4">ToDo管理アプリ</h1>

  <from className="mb-8 space-x-4" onSubmit={(addTask)}>
    <input type={"text"} name={"title"} />
    <input type={"date"} name={"end_date"} />
    <input type="submit" value="submit" />
  </from>
  
  
  
  {tasks.map((item) => (
    <div key={item.id} className="flex gap-4">
      <input type="checkbox" checked={item.done} />
      <span>{item.title}</span>
      <span>{item.end_date}</span>
      </div>
  ))}
</div>
  )
}