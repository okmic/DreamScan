import React from 'react';
import { Sparkles, Star, Moon, Eye, Award } from 'lucide-react';
import "./styles.css"

interface DreamInterpretationProps {
    interpretation: string | null;
}

const DreamInterpretation: React.FC<DreamInterpretationProps> = ({ interpretation }) => {
    if (!interpretation) return null;

    return (
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 mt-12 animate-fadeIn">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

                <div className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    <div className="absolute top-4 right-4">
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-white/20 fill-white/10" />
                            ))}
                        </div>
                    </div>

                    <div className="p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                                <Sparkles className="w-5 h-5 text-white/70 relative" />
                            </div>
                            <h3 className="text-white/80 font-light tracking-wide text-sm uppercase">
                                Толкование звёзд
                            </h3>
                            <div className="flex-1" />
                            <Moon className="w-4 h-4 text-white/20" />
                        </div>

                        <div className="space-y-6">
                            <div className="relative pl-4 border-l-2 border-white/20">
                                <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                                    {interpretation}
                                </p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-3 h-3 text-white/20" />
                                        <span className="text-white/20 text-[10px] tracking-wider">
                                            Расшифровано DreamScan
                                        </span>
                                    </div>
                                    <div className="flex gap-1">
                                        <Award className="w-3 h-3 text-white/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default DreamInterpretation;