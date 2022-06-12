export default function Footer(props) {
    if (props.resources) {

        return (
            <footer className="px-8 py-6 text-2xl font-semibold text-center text-gray-800 bg-emerald-500">
                <p> {props.resources.length}  Location World Wide</p>
            </footer>
        )


    } else {
        return (
            <footer className="px-8 py-6 text-2xl font-semibold text-center text-gray-800 bg-emerald-500">
            </footer>
        )
    }
}


