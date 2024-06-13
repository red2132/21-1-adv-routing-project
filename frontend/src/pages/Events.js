import { Link } from "react-router-dom"

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Some event'
    },
    {
        id: 'e2',
        title: 'Another event'
    }
]

function EventPage() {
    return (
        <>
        <h1>Events Page</h1>
        <ul>
            {
                DUMMY_EVENTS.map(e => 
                <li key={e.id}>
                    <Link to={e.id}>{e.title}</Link>
                </li>)
            }
        </ul>
        </>
    )
}

export default EventPage