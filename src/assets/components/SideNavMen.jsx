function SideNavMen(props){

    return <div className="flex text-3xl text-white gap-3 pt-28 pl-3">
        <i class={`fa-solid ${props.icons}`}></i>
        <h1>{props.tittle}</h1>
    </div>
}

export default SideNavMen