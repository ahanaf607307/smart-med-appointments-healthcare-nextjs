"use client"


import { Star } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const DoctorReviewModal = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)
    const [reviewTitle, setReviewTitle] = useState("")
    const [reviewContent, setReviewContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the review data to your backend
        console.log({
            rating,
            title: reviewTitle,
            content: reviewContent,
        })

        // Reset form and close modal
        setRating(0)
        setReviewTitle("")
        setReviewContent("")
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add Your Review</DialogTitle>
                        <DialogDescription>Share your experience with Dr. Sarah Johnson to help other patients.</DialogDescription>
                    </DialogHeader>

                    <div className="py-4 space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="rating">Rating</Label>
                            <div className="flex gap-1" id="rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="focus:outline-none"
                                    >
                                        <Star
                                            className={`h-8 w-8 ${star <= (hoveredRating || rating)
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "fill-gray-200 text-gray-200"
                                                } transition-colors`}
                                        />
                                        <span className="sr-only">{star} stars</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="review-title">Review Title</Label>
                            <input
                                id="review-title"
                                value={reviewTitle}
                                onChange={(e) => setReviewTitle(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Summarize your experience"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="review-content">Your Review</Label>
                            <Textarea
                                id="review-content"
                                value={reviewContent}
                                onChange={(e) => setReviewContent(e.target.value)}
                                placeholder="Share details of your experience with Dr. Johnson"
                                className="min-h-[120px]"
                                required
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={rating === 0 || !reviewTitle || !reviewContent}>
                            Submit Review
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DoctorReviewModal
