import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pdfjs } from 'react-pdf';
import { BlockMath, InlineMath } from 'react-katex';

import 'katex/dist/katex.min.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Section from 'src/shared/Section';
import PdfViewer from 'src/shared/PdfViewer';

import origamiPdf from 'src/assets/papers/origami.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const OrigamiPage: React.FC = () => {
    const [showPdf, setShowPdf] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <header className="text-center mb-16">
                    <motion.h1
                        className="text-5xl font-extrabold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Investigating the Constructability of Regular Polygons through Origami
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        In-depth analysis and exploration of mathematics behind paper folding, showcasing its superiority over classical Greek straightedge and compass constructions.
                    </motion.p>
                </header>
                <div className="text-center mb-12">
                    <button
                        onClick={() => setShowPdf(!showPdf)}
                        className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        {showPdf ? 'Hide Full Paper' : 'View Full Paper (PDF)'}
                    </button>
                    <AnimatePresence>
                        {showPdf && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <PdfViewer file={origamiPdf} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Section title="The Motive: From a Coaster to a Question">
                    <p>
                        My mom side of the family has a hobby and tradition of making origami, one of which included coasters. Out of the many origami's that filled my view, a 14-sided star shaped origami coaster caught my attention. What could the mathematics behind folding these square paper into a specific shape look like? This question led me to explore the mathematical foundations and axioms of origami, and by extention its capability to construct regular polygons, compared to the classical Greek constructions using only a compass and straightedge.
                    </p>
                </Section>

                <Section title="The Rules of the Fold: Huzita-Hatori Axioms">
                    <p>
                        Paper-folding are governed, similar to straightedge and compass, by a set of axioms known by the Huzita-Hatori Axioms. These axioms define a set of mathematically unique operations that can be performed with folding paper. It was uncovered that the five of the axioms are sufficient to replicate all Euclidean constructions, which allows the solution of linear and quadratic equations. However, what makes origami more powerful than the straightedge and compass is the sixth and seventh axioms, which allow for the constructing a solution for cubic equations, and by extension, the construction of regular polygons that are not constructible with just a compass and straightedge.
                    </p>
                    <p>
                        The axiom to note is <b>Axiom 6</b>, which states that given two points (<InlineMath math="p_1, p_2" />) and two lines (<InlineMath math="l_1, l_2" />), a fold exists that places <InlineMath math="p_1" /> onto <InlineMath math="l_1" /> and <InlineMath math="p_2" /> onto <InlineMath math="l_2" />. This is crucial as certain regular polygons require the solution of cubic equations. The research paper delves into the work of Margherita Beloch, who demonstrated that this single fold is equivalent to finding the common tangent to two parabolas, which which is mathematically equivalent to solving <b> cubic equations </b>. This is a feat impossible with only a compass and straightedge.
                    </p>
                </Section>

                <Section title="Constructing Polygons: The Core Problem">
                    <p>
                        Why is the solution to a cubic equation so important in constructing regular polygons? The answer lies in the connection between the roots of unity and the geometry of regular polygons. The roots of unity are complex numbers are a solution to <InlineMath math="z^n - 1 = 0" /> and represents the vertices of a regular n-gon inscribed in a unit circle. Each vertex corresponds to a complex number of the form <InlineMath math="e^{2\pi i k/n}" />, where <InlineMath math="k" /> is an integer from 0 to <InlineMath math="n-1" />.
                    </p>
                    <p>
                        Interestingly, <InlineMath math="z^n - 1 = 0" /> can be factored into <InlineMath math="(z - 1)(z^{n-1} + z^{n-2} + ... + z + 1) = 0" />, where the first factor corresponds to the vertex at <InlineMath math="1" /> (the point on the real axis), and the solutions to the second factor correspond to the remaining vertices of the n-gon. Mathematically, we can derive the ratio of the lengths of the sides of the n-gon to the circle radius given as <InlineMath math="2\cos(2\pi/n)" />. This is the key to constructing regular polygons with origami.
                        If the degree of this minimal polynomial is a power of 2, the n-gon is constructible with a compass and straightedge. However, since origami can solve cubic equations, it can also construct n-gons where the degree of the minimal polynomial has factors of 3.
                    </p>
                </Section>

                <Section title="Case Study 1: The Heptagon (7-gon)">
                    <p>
                        Famously, the regular heptagon is not constructible using straightedge and compass. We find that the minimal polynomial for <InlineMath math="t = 2\cos(2\pi/7)" /> is a cubic equation:
                    </p>
                    <BlockMath math="t^3 + t^2 - 2t - 1 = 0" />
                    <p>
                        Since this is a cubic equation, it cannot be solved with only quadratic roots. However, using Beloch's Fold (an application of Axiom 6), this equation can be solved with origami. The paper demonstrates how to set up the points and lines required for Lill's Method, a graphical procedure for finding polynomial roots, and then execute the fold to find the solution, thereby constructing the heptagon.
                    </p>
                </Section>

                <Section title="Case Study 2: The Tridecagon (13-gon)">
                    <p>
                        On the other hand, constructing a tridecagon is a significantly more complex challenge. The minimal polynomial for <InlineMath math="2\cos(2\pi/13)" /> is a sextic (degree 6) equation. At first glance, this seems impossible, however, I devised a method to tackle it using origami techniques. The problem can be broken down into a series of solvable steps.
                    </p>
                    <p><b>Step 1: Reduce the Sextic to a Quadratic.</b> The roots are grouped into two sets, <InlineMath math="\beta_1" /> and <InlineMath math="\beta_2" />. The sum and product of these sets are constructible numbers, leading to a simple quadratic equation whose roots are <InlineMath math="\beta_1" /> and <InlineMath math="\beta_2" />:</p>
                    <BlockMath math="x^2 + x - 3 = 0" />
                    <p>Solving this gives <InlineMath math="\beta_1 = \frac{-1 + \sqrt{13}}{2}" />. Since <InlineMath math="\sqrt{13}" /> can be constructed, so can <InlineMath math="\beta_1" />.</p>

                    <p><b>Step 2: Reduce to a Cubic.</b> The value we ultimately want, <InlineMath math="\alpha_1 = 2\cos(2\pi/13)" />, is part of the set <InlineMath math="\beta_1" />. By further grouping the roots within <InlineMath math="\beta_1" />, we can form a cubic equation for <InlineMath math="\alpha_1" /> where the coefficients are made from the constructible numbers we just found.</p>
                    <p>This leads to the following constructible trinomial, whose coefficients involve constructable values, <InlineMath math="\beta_1" /> and <InlineMath math="\beta_2" />:</p>
                    <BlockMath math="x^3 - \left(\frac{\sqrt{13}-1}{2}\right)x^2 - x + \frac{\sqrt{13}-3}{2} = 0" />
                    <p>Because the coefficients involve <InlineMath math="\sqrt{13}" /> (which is constructible) and the equation is cubic, its roots can be constructed using origami. The paper provides a tutorial with real paper and step-by-step visual guide for performing the necessary folds to solve this equation and produce the ratio needed for a regular 13-gon.</p>
                </Section>

                <Section title="Conclusion and Remarks">
                    <p>
                        The research concludes that a regular n-gon is constructible with origami if the prime factorization of n is of the form:
                    </p>
                    <BlockMath math="n = 2^p 3^q k" />
                    <p>
                        where <InlineMath math="p" /> and <InlineMath math="q" /> are non-negative integers, and <InlineMath math="k" /> is a product of distinct <b>Pierpont primes</b>. A Pierpont prime is a prime number of the form:
                    </p>
                    <BlockMath math="2^r 3^s + 1" />
                    <p>
                        For example, 7 and 13 are both Pierpont primes (<InlineMath math="7 = 2^13 + 1" />, <InlineMath math="13 = 2^23 + 1" />). This shows that the origami supercedes the limitations of Euclidean constructions, allowing ratios that are impossible to construct with just a compass and straightedge. Although in both methods the practical accuracy diminishes as the ratio demands more steps to construct, the theoretical power of origami is undeniable.
                    </p>
                    <p>
                        I had fun exploring the intriguing math behind origami - a tradition I am fond of - and being able to compose a paper that not only explains the mathematics but also provides a practical guide in constructing regular tridecagons using origami techniques and math I learned. This specific tutorial of folding a tridecagon is completely original and is not found in any other paper or source, which makes me the first to document this method. Although trivial, I am proud of this accomplishment and hope I can contribute more to academia in the future.
                    </p>
                </Section>
            </div>
        </div>
    );
}

export default OrigamiPage;