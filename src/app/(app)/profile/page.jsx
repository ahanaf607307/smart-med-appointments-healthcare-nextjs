import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, LinkIcon, Mail, MapPin } from "lucide-react"

const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    image: "/placeholder.svg?height=96&width=96",
    location: "San Francisco, CA",
    website: "janesmith.dev",
    joinDate: "January 2023",
    bio: "Full-stack developer passionate about creating beautiful user experiences",
}

const Profile = () => {
    const initials = user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <Card className="max-w-md mx-auto mt-10">
            <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-lg">{initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    {user.bio && <p className="text-muted-foreground text-sm">{user.bio}</p>}
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{user.email}</span>
                    </div>

                    {user.location && (
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{user.location}</span>
                        </div>
                    )}

                    {user.website && (
                        <div className="flex items-center gap-2">
                            <LinkIcon className="h-4 w-4 text-muted-foreground" />
                            <a
                                href={user.website.startsWith("http") ? user.website : `https://${user.website}`}
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {user.website}
                            </a>
                        </div>
                    )}

                    {user.joinDate && (
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Joined {user.joinDate}</span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default Profile
