import NavTabs from "../NavTabs"


export default function Header(props) {
    return (
        <div>
            <h1 className = "headerTitle">Welcome, my name is Daniel Rubio</h1>
            <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        </div>
    )
}
