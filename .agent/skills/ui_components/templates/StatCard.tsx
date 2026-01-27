import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: string;
        positive: boolean;
    };
}

/**
 * High-Fidelity Stat Card
 */
export default function StatCard({ label, value, icon: Icon, trend }: StatCardProps) {
    return (
        <div className="card p-5 flex items-center gap-4 hover:border-primary-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Icon size={24} className="text-white" />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                    {label}
                </p>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white font-mono">{value}</span>
                    {trend && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${trend.positive ? 'bg-success-500/10 text-success-400' : 'bg-error-500/10 text-error-400'
                            }`}>
                            {trend.value}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
