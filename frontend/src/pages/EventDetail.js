import {useLoaderData} from 'react-router-dom'
import EventItem from "../components/EventItem"

function EventDetailPage() {
    const data = useLoaderData()

    return (
        <EventItem event={data.event}/>
    )
}

export default EventDetailPage

export async function loader({req, params}) {
    const id = params.eventId
    const res = await fetch('http://localhost:8080/events/'+id)

    if(!res.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch events' }),
        {status: 500}
      )
    } else {
        return res
    }
}
