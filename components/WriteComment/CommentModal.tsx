import { useState, useEffect } from "react";
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogClose,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// TODO: Add a comment modal
const CommentModal = () => {

    const [comment, setComment] = useState("")

    const onSubmit = () => {
        console.log(comment)
        setComment("")
    }

    return (

        <>
            <DialogContent className="w-[380px]">
                <DialogHeader>
                    <DialogTitle className="text-left">Create Post</DialogTitle>
                </DialogHeader>
                <div className="flex items-left space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}

                        />
                    </div>

                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" onClick={onSubmit}>
                            Post
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </>
    )
}

export default CommentModal;