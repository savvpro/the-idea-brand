import Link from "next/link";

export default function NotFound() { return <main className="not-found"><span>404</span><h1>This idea hasn’t been made yet.</h1><p>The page may have moved, or the address may be incomplete.</p><Link className="button" href="/">Back home</Link></main>; }
