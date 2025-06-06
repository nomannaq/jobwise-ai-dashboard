"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MinimalButton } from "@/components/minimal-button"
import { Badge } from "@/components/ui/badge"
import { Bell, CreditCard, Lock, User } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "account", label: "Account", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "billing", label: "Billing", icon: CreditCard },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Settings ⚙️</h2>
          <p className="text-gray-600 mt-1">Manage your account preferences and settings.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <Card className="md:w-64 flex-shrink-0">
            <CardContent className="p-4">
              <nav className="flex flex-col space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100 hover:text-black"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Content */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Profile Photo</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        This will be displayed on your profile and applications
                      </p>
                      <div className="flex gap-2">
                        <MinimalButton variant="secondary" size="sm">
                          Upload New
                        </MinimalButton>
                        <MinimalButton variant="ghost" size="sm">
                          Remove
                        </MinimalButton>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="Alex"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="Johnson"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="alex@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="(555) 123-4567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="San Francisco, CA"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                        defaultValue="Frontend developer with 5+ years of experience in React and TypeScript."
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <MinimalButton variant="primary">Save Changes</MinimalButton>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "account" && (
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account security and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Password</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                      <div className="md:col-span-2 h-px bg-gray-100 my-2"></div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <MinimalButton variant="primary" size="sm">
                        Update Password
                      </MinimalButton>
                    </div>
                  </div>

                  <div className="h-px bg-gray-100 my-4"></div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Connected Accounts</h3>
                    <div className="space-y-4">
                      {[
                        { name: "LinkedIn", icon: "🔗", connected: true },
                        { name: "Google", icon: "🔍", connected: true },
                        { name: "GitHub", icon: "💻", connected: false },
                      ].map((account) => (
                        <div key={account.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                              {account.icon}
                            </div>
                            <div>
                              <p className="font-medium">{account.name}</p>
                              <p className="text-sm text-gray-500">
                                {account.connected ? "Connected" : "Not connected"}
                              </p>
                            </div>
                          </div>
                          <MinimalButton variant={account.connected ? "secondary" : "primary"} size="sm">
                            {account.connected ? "Disconnect" : "Connect"}
                          </MinimalButton>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-gray-100 my-4"></div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Danger Zone</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
                      <p className="text-sm text-red-700 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <MinimalButton
                        variant="ghost"
                        size="sm"
                        className="bg-white border border-red-300 text-red-600 hover:bg-red-50"
                      >
                        Delete Account
                      </MinimalButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Control how and when we contact you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        {[
                          {
                            id: "new-matches",
                            label: "New Job Matches",
                            description: "When new jobs match your profile",
                          },
                          {
                            id: "application-updates",
                            label: "Application Updates",
                            description: "Status changes to your applications",
                          },
                          {
                            id: "interview-reminders",
                            label: "Interview Reminders",
                            description: "Reminders about upcoming interviews",
                          },
                          {
                            id: "resume-suggestions",
                            label: "Resume Suggestions",
                            description: "AI-powered suggestions to improve your resume",
                          },
                        ].map((item) => (
                          <div key={item.id} className="flex items-start space-x-3">
                            <input
                              type="checkbox"
                              id={item.id}
                              defaultChecked
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <div>
                              <label htmlFor={item.id} className="font-medium">
                                {item.label}
                              </label>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-gray-100 my-4"></div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Frequency</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Job Match Notification Frequency
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                            <option>Immediately</option>
                            <option>Daily Digest</option>
                            <option>Weekly Digest</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Application Update Frequency
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                            <option>Immediately</option>
                            <option>Daily Digest</option>
                            <option>Weekly Digest</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <MinimalButton variant="primary">Save Preferences</MinimalButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "billing" && (
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Subscription</CardTitle>
                  <CardDescription>Manage your subscription and payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge className="bg-yellow-500 text-white mb-2">Pro Plan</Badge>
                          <h3 className="font-medium">JobWise AI Pro</h3>
                          <p className="text-sm text-gray-600">$19.99/month • Renews on June 15, 2024</p>
                        </div>
                        <div className="text-2xl">✨</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                              💳
                            </div>
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-gray-500">Expires 12/25</p>
                            </div>
                          </div>
                          <Badge>Default</Badge>
                        </div>
                      </div>

                      <MinimalButton variant="secondary" size="sm">
                        Add Payment Method
                      </MinimalButton>
                    </div>

                    <div className="h-px bg-gray-100 my-6"></div>

                    <h3 className="text-lg font-medium mb-4">Billing History</h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Invoice
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            { date: "May 15, 2024", amount: "$19.99", status: "Paid" },
                            { date: "Apr 15, 2024", amount: "$19.99", status: "Paid" },
                            { date: "Mar 15, 2024", amount: "$19.99", status: "Paid" },
                          ].map((invoice, i) => (
                            <tr key={i}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.date}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.amount}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <Badge className="bg-green-100 text-green-800 border-green-200">{invoice.status}</Badge>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                <button className="text-gray-600 hover:text-black">Download</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
