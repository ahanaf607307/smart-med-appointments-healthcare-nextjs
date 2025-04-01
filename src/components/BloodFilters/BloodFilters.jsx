"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, ChevronDown } from "lucide-react"
import { useState } from "react"

const BloodFilters = () => {

    const [openBloodType, setOpenBloodType] = useState(true)
    const [openUrgency, setOpenUrgency] = useState(true)
    const [openLocation, setOpenLocation] = useState(false)

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                {/* Blood Type */}
                <Collapsible open={openBloodType} onOpenChange={setOpenBloodType}>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex w-full justify-between p-0 font-medium">
                            Blood Type
                            <ChevronDown className={`h-4 w-4 transition-transform ${openBloodType ? "rotate-180" : ""}`} />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2 pb-1">
                        <div className="space-y-3">
                            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                                <div key={type} className="flex items-center space-x-2">
                                    <Checkbox id={`blood-type-${type}`} />
                                    <Label htmlFor={`blood-type-${type}`} className="text-sm font-normal cursor-pointer">
                                        {type}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                {/* End of Blood Type */}

                {/* Emergency Level */}
                <Collapsible open={openUrgency} onOpenChange={setOpenUrgency}>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex w-full justify-between p-0 font-medium">
                            Urgency Level
                            <ChevronDown className={`h-4 w-4 transition-transform ${openUrgency ? "rotate-180" : ""}`} />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2 pb-1">
                        <RadioGroup defaultValue="all">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="all" id="urgency-all" />
                                <Label htmlFor="urgency-all" className="text-sm font-normal cursor-pointer">
                                    All Requests
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                                <RadioGroupItem value="immediate" id="urgency-immediate" />
                                <Label htmlFor="urgency-immediate" className="text-sm font-normal cursor-pointer">
                                    Immediate (Within hours)
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                                <RadioGroupItem value="urgent" id="urgency-urgent" />
                                <Label htmlFor="urgency-urgent" className="text-sm font-normal cursor-pointer">
                                    Urgent (Within 24 hours)
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                                <RadioGroupItem value="high" id="urgency-high" />
                                <Label htmlFor="urgency-high" className="text-sm font-normal cursor-pointer">
                                    High (Within 48 hours)
                                </Label>
                            </div>
                        </RadioGroup>
                    </CollapsibleContent>
                </Collapsible>
                {/* End of Emergency Level */}

                <Button className="w-full mt-4" variant="outline">
                    <Check className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
            </CardContent>
        </Card>
    )
}

export default BloodFilters
