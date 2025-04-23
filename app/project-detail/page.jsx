"use client"

import { useState } from 'react';
import { Building2, Clock, Edit2, Globe, Link2, Mail, MapPin, Phone, Save, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectDetails, projects } from '@/lib/mock-data';
import DashboardLayout from '@/components/layout/dashboard-layout';
// import { toast } from '@/components/ui/use-toast';

export default function ProjectDetailsPage({ params }) {
    const [isEditing, setIsEditing] = useState(false);
    const [details, setDetails] = useState(projectDetails);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        toast({
            title: "Changes saved",
            description: "Project details have been updated successfully.",
        });
    };

    const handleInputChange = (section, field, value) => {
        setDetails(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const InputField = ({ section, field, label, type = "text", icon: Icon }) => (
        <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-1">
                {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                {label}
            </label>
            {type === "textarea" ? (
                <Textarea
                    value={details[section][field]}
                    onChange={(e) => handleInputChange(section, field, e.target.value)}
                    disabled={!isEditing}
                    className="resize-none"
                    rows={4}
                />
            ) : (
                <Input
                    type={type}
                    value={details[section][field]}
                    onChange={(e) => handleInputChange(section, field, e.target.value)}
                    disabled={!isEditing}
                />
            )}
        </div>
    );

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Project Details</h1>
                        <p className="text-muted-foreground">
                            View and manage your project information
                        </p>
                    </div>
                    <Button onClick={isEditing ? handleSave : handleEdit}>
                        {isEditing ? (
                            <>
                                <Save className="mr-2 h-4 w-4" /> Save Changes
                            </>
                        ) : (
                            <>
                                <Edit2 className="mr-2 h-4 w-4" /> Edit Details
                            </>
                        )}
                    </Button>
                </div>

                <Tabs defaultValue="business" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="business">Business Info</TabsTrigger>
                        <TabsTrigger value="submission">Submission Info</TabsTrigger>
                        <TabsTrigger value="social">Social Media</TabsTrigger>
                        <TabsTrigger value="hours">Business Hours</TabsTrigger>
                        <TabsTrigger value="additional">Additional Info</TabsTrigger>
                    </TabsList>

                    <TabsContent value="business">
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Basic Information</CardTitle>
                                    <CardDescription>
                                        Primary business details and contact information
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <InputField
                                            section="businessInfo"
                                            field="businessName"
                                            label="Business Name"
                                            icon={Building2}
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="representativeName"
                                            label="Representative Name"
                                            icon={Users}
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="websiteUrl"
                                            label="Website URL"
                                            icon={Globe}
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="logoUrl"
                                            label="Logo URL"
                                            icon={Link2}
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="businessEmail"
                                            label="Business Email"
                                            type="email"
                                            icon={Mail}
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="phoneNumber"
                                            label="Phone Number"
                                            icon={Phone}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <InputField
                                            section="businessInfo"
                                            field="address"
                                            label="Address"
                                            icon={MapPin}
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="city"
                                            label="City"
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="state"
                                            label="State"
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="country"
                                            label="Country"
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="zipCode"
                                            label="Zip Code"
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="establishmentYear"
                                            label="Establishment Year"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <InputField
                                            section="businessInfo"
                                            field="description"
                                            label="Business Description"
                                            type="textarea"
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="tagline"
                                            label="Business Tagline"
                                        />
                                        <InputField
                                            section="businessInfo"
                                            field="abnNumber"
                                            label="ABN Number"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="submission">
                        <Card>
                            <CardHeader>
                                <CardTitle>Submission Information</CardTitle>
                                <CardDescription>
                                    Details used for submissions and backlinks
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        section="submissionInfo"
                                        field="email"
                                        label="Submission Email"
                                        type="email"
                                    />
                                    <InputField
                                        section="submissionInfo"
                                        field="companyName"
                                        label="Company Name"
                                    />
                                    <InputField
                                        section="submissionInfo"
                                        field="fullName"
                                        label="Full Name"
                                    />
                                    <InputField
                                        section="submissionInfo"
                                        field="userName"
                                        label="Username"
                                    />
                                    <InputField
                                        section="submissionInfo"
                                        field="backlinksPassword"
                                        label="Backlinks Password"
                                        type="password"
                                    />
                                    <InputField
                                        section="submissionInfo"
                                        field="backlinksEmail"
                                        label="Backlinks Email"
                                        type="email"
                                    />
                                    <InputField
                                        section="submissionInfo"
                                        field="emailPasswordNew"
                                        label="Email Password (New)"
                                        type="password"
                                    />
                                    <InputField
                                        section="submissionInfo"
                                        field="emailPasswordOld"
                                        label="Email Password (Old)"
                                        type="password"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="social">
                        <Card>
                            <CardHeader>
                                <CardTitle>Social Media Links</CardTitle>
                                <CardDescription>
                                    Connect your social media profiles
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InputField
                                        section="socialMedia"
                                        field="facebook"
                                        label="Facebook Page URL"
                                    />
                                    <InputField
                                        section="socialMedia"
                                        field="instagram"
                                        label="Instagram URL"
                                    />
                                    <InputField
                                        section="socialMedia"
                                        field="youtube"
                                        label="YouTube Channel"
                                    />
                                    <InputField
                                        section="socialMedia"
                                        field="twitter"
                                        label="Twitter URL"
                                    />
                                    <InputField
                                        section="socialMedia"
                                        field="x"
                                        label="X (Twitter) URL"
                                    />
                                    <InputField
                                        section="socialMedia"
                                        field="linkedin"
                                        label="LinkedIn URL"
                                    />
                                    <InputField
                                        section="socialMedia"
                                        field="discord"
                                        label="Discord Server"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="hours">
                        <Card>
                            <CardHeader>
                                <CardTitle>Business Hours</CardTitle>
                                <CardDescription>
                                    Set your regular business hours
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.keys(details.businessHours).map(day => (
                                        <InputField
                                            key={day}
                                            section="businessHours"
                                            field={day}
                                            label={day.charAt(0).toUpperCase() + day.slice(1)}
                                            icon={Clock}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="additional">
                        <Card>
                            <CardHeader>
                                <CardTitle>Additional Information</CardTitle>
                                <CardDescription>
                                    Other relevant details and notes
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <InputField
                                    section="additionalInfo"
                                    field="notes"
                                    label="Additional Notes"
                                    type="textarea"
                                />
                                <div className="space-y-1">
                                    <label className="text-sm font-medium">Competitors</label>
                                    <div className="space-y-2">
                                        {details.additionalInfo.competitors.map((competitor, index) => (
                                            <Input
                                                key={index}
                                                value={competitor}
                                                onChange={(e) => {
                                                    const newCompetitors = [...details.additionalInfo.competitors];
                                                    newCompetitors[index] = e.target.value;
                                                    handleInputChange('additionalInfo', 'competitors', newCompetitors);
                                                }}
                                                disabled={!isEditing}
                                                placeholder={`Competitor ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    );
}