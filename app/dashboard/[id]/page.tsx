import { Suspense } from "react";
import Edit from "./Edit";

export default function Page() {
    return (
        <Suspense fallback={<p>Loading note...</p>}>
            <Edit/>
        </Suspense>
    )
}
