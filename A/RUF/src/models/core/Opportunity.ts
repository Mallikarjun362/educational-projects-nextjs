import mongoose, { Document, Schema } from 'mongoose';
import connection from '@/config/mongodb';

// Entity : "Opportunity"
interface IOpportunity extends Document {
    title?: string
    gain?: [string];
    links?: [string];
    posts?: [Object];
    unique_code: string;
    description?: string;
    eligibility?: [string];
    preparation_groups?: [Object];
    skill_requirements?: [string];
    discussion_comments?: [Object];
    educational_resources_links?: [string];
    apply_period?: { start: Date; end: Date };
    quality_profile?: {
        money_in_rupees: number;
        duration_in_months: number;
        experiance_gain: 1 | 2 | 3 | 4 | 5;
        organization_quality: 1 | 2 | 3 | 4 | 5;
        recognition_level: "INTERNATIONAL" | "NATIONAL";
    };
}


const opportunitySchema: Schema<IOpportunity> = new Schema({
    title: { type: String, },
    gain: { type: [String] },
});


const Opportunity = connection.model<IOpportunity>('Opportunity', opportunitySchema);

export default Opportunity;
