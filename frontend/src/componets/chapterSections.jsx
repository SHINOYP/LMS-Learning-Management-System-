



const chapterSections=({chapter})=>{
    return(
        <div>
            <h4>course {chapter.title}</h4>
            <p> date created {chapter.createdAt}</p>
        </div>
    )
}


export default chapterSections;