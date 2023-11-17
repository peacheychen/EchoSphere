import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogClose,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";

// TODO: Add a comment modal
const CommentModal = () => {

    return (

        <>
            <DialogContent className="w-[380px]">
                <DialogHeader>
                    <DialogTitle>Create Post</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <div>
                            Link
                        </div>
                        <Input
                            id="link"
                            defaultValue="https://ui.shadcn.com/docs/installation"
                            readOnly
                        />
                    </div>

                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <button type="button">
                            Post
                        </button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </>
    )
}

export default CommentModal;