import Item from './SingComp/item'
import ViewItem from './SingComp/viewItem'

function webDesign() {
  return (
    <div className='flex flex-row gap-4'>
       <div className='flex-1 flex flex-col gap-4'>
       
           <Item test="['tes', 'test2', 'test3']" avatar='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' title="React js" discription='React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs.'/>
           <Item avatar='https://miro.medium.com/max/1200/1*O6KluMvEBZ1cBL3EPo4tig.png' title="Electron js" discription='Electron is a framework for creating native applications with web technologies like JavaScript, HTML, CSS.'/>
           <Item avatar='https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg' title="Tailwind CSS" discription='Tailwind CSS is a utility-first CSS (Cascading Style Sheets) framework with predefined classes that you can use to build and design.'/>
           <Item avatar='https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg' title="Redux" discription='Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'/>
           <Item avatar='https://s.w.org/style/images/about/WordPress-logotype-wmark.png' title="Wordpress" discription='WordPress is open source software you can use to create a beautiful website, blog, or app. Beautiful designs, powerful features, and the freedom to build'/>
           <Item avatar='https://www.gstatic.com/devrel-devsite/prod/v0e5fe81d770a1c83a74ae94cff5f78c2b690ac595b30fc2439f12b56fdf9fe78/firebase/images/touchicon-180.png' title="Firebase" discription='Firebase helps us to build backend tools Backed by Google, such as database, realtime databse, storages etc .'/>

        </div>
        <div className='flex-1 bg-dark-700 rounded p-4'>
            <ViewItem/>
        </div>
        
    </div>
  )
}

export default webDesign