function numbersPrint(input) {
    const twoCriteriaSort = (cur,next)=>{
        return cur.length-next.length || cur.localeCompare(next);
    }
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}