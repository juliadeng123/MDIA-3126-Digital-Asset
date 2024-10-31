import { createClient } from "@/utils/supabase/server";
import CreateMemory from "./createMemory";
import MemoryList from "./memoryList";

export default async function Page() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <div className='p-4 bg-black text-white'>
            <CreateMemory user={user} />
            <MemoryList user={user} />
        </div>
    );
}
