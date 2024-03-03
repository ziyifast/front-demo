export default function TodoFilter({setFilter}:any){
    return (
        <div>
            <button onClick={()=>setFilter('all')}>All</button>
            <button onClick={()=>setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('active')}>active</button>
        </div>
    )
}