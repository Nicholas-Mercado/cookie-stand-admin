export default function Footer({ copyright, table }) {
    return (
        <footer className="px-8 py-6 text-2xl font-semibold text-gray-800 bg-emerald-500">
            <p>&copy;{copyright}</p>
            <p>{table.length} Location World Wide</p>
        </footer>
    )
  }
