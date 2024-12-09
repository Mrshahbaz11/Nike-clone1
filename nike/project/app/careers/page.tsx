import { Button } from "@/components/ui/button";

const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    location: "Portland, OR",
    department: "Technology",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Designer",
    location: "London, UK",
    department: "Design",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Marketing Manager",
    location: "New York, NY",
    department: "Marketing",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Careers at Nike</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-lg">
          Join our team and be part of something bigger. We're always looking for people who share our passion and want to make an impact.
        </p>
      </div>

      <div className="space-y-6">
        {jobListings.map((job) => (
          <div key={job.id} className="border rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-muted-foreground mb-4">{job.location}</p>
                <div className="flex gap-4">
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>
              <Button>Apply Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}