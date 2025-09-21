import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Logo } from '../../../components/logo/logo';
import { TableOfContents } from '@/components/table-of-contents';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ManifestPage' });

  return {
    title: t('title'),
  };
}

export default function Manifest() {
  const t = useTranslations('ManifestPage');

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      {/* Table of Contents - Mobile */}
      <div className='lg:hidden mb-4'>
        <TableOfContents />
      </div>

      <div className='flex gap-8'>
        {/* Main content */}
        <div className='flex-1 max-w-4xl'>
          {/* I. Who Are We? */}
          <section id='I_whoWeAre' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>{t('I_whoWeAre.title')}</h2>
            <p className='text-lg leading-relaxed'>{t('I_whoWeAre.text')}</p>
          </section>

          {/* II. Core Beliefs */}
          <section id='II_fundamentals' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('II_fundamentals.title')}
            </h2>
            <ol className='list-decimal list-inside space-y-1 text-lg'>
              {t
                .raw('II_fundamentals.points')
                .map(
                  (point: { title: string; text: string }, index: number) => (
                    <li key={index} className='leading-relaxed font-bold'>
                      {point.title}
                      <p className='font-normal'>{point.text}</p>
                    </li>
                  )
                )}
            </ol>
          </section>

          {/* II-A. The Nature of God */}
          <section id='IIA_natureOfGod' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('IIA_natureOfGod.title')}
            </h2>
            <div className='space-y-1 text-lg leading-relaxed'>
              <p>{t('IIA_natureOfGod.intro')}</p>
              <p>{t('IIA_natureOfGod.crystal')}</p>
              <p>{t('IIA_natureOfGod.religions')}</p>
              <p>{t('IIA_natureOfGod.limits')}</p>
              <p>{t('IIA_natureOfGod.praxiotheism')}</p>
            </div>
          </section>

          {/* III. Practices */}
          <section id='III_practices' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('III_practices.title')}
            </h2>
            <ul className='list-disc list-inside space-y-1 text-lg mb-6'>
              {t
                .raw('III_practices.items')
                .map((item: { title: string; text: string }, index: number) => (
                  <li key={index} className='leading-relaxed font-bold'>
                    {item.text}&nbsp;
                    <span className='font-normal'>{item.text}</span>
                  </li>
                ))}
            </ul>
            <div>
              <h3 className='font-bold text-xl mb-3'>
                {t('III_practices.keepInMind')}:
              </h3>
              <ul className='list-disc list-inside space-y-1'>
                {t
                  .raw('III_practices.remember')
                  .map((item: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </section>

          {/* IV. Structure - Table */}
          <section id='IV_structure' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('IV_structure.title')}
            </h2>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr>
                    {t
                      .raw('IV_structure.rolesHeader')
                      .map((header: string, index: number) => (
                        <th
                          key={index}
                          className='border border-gray-300 text-left p-2 font-bold'
                        >
                          {header}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {t
                    .raw('IV_structure.roles')
                    .map((role: any, index: number) => (
                      <tr key={index}>
                        <td className='border border-gray-300 p-2 font-bold'>
                          {role.term}
                        </td>
                        <td className='border border-gray-300 p-2'>
                          {role.description}
                        </td>
                        <td className='border border-gray-300 p-2 italic'>
                          {role.example}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className='mt-4'>
              <p className='text-lg  italic'>{t('IV_structure.note')}</p>
            </div>
          </section>

          {/* V. Symbolism */}
          <section id='V_symbolism' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('V_symbolism.title')}
            </h2>
            <ul>
              <li className='text-lg mb-4 list-disc'>
                {t.rich('V_symbolism.sign', {
                  span: (chunks) => <span className='font-bold'>{chunks}</span>,
                })}
              </li>
              <Logo size={168} className='mx-auto' />
              <p className='text-lg font-bold my-8 text-center'>
                {t('V_symbolism.whyHeader')}
              </p>
              <ol className='list-decimal list-inside space-y-1 mb-4'>
                {t
                  .raw('V_symbolism.why')
                  .map((reason: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {t.rich(`V_symbolism.why.${index}`, {
                        span: (chunks) => (
                          <span className='font-bold'>{chunks}</span>
                        ),
                      })}
                    </li>
                  ))}
              </ol>
              <li className='text-lg list-disc'>{t('V_symbolism.freedom')}</li>
            </ul>
          </section>

          {/* VI. Joining the Movement */}
          <section id='VI_recruitsAndInitiation' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('VI_recruitsAndInitiation.title')}
            </h2>
            <div className='space-y-1 text-lg'>
              {t
                .raw('VI_recruitsAndInitiation.movements')
                .map((movement: string, index: number) => (
                  <li key={index} className='list-disc'>
                    {movement}
                  </li>
                ))}
            </div>
          </section>

          {/* VII. Principles */}
          <section id='VII_principles' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('VII_principles.title')}
            </h2>
            <ol className='list-decimal list-inside space-y-1 text-lg font-bold'>
              {t
                .raw('VII_principles.points')
                .map((point: string, index: number) => (
                  <li key={index} className='leading-relaxed'>
                    {point}
                  </li>
                ))}
            </ol>
          </section>

          {/* VIII. Goals */}
          <section id='VIII_goals' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>{t('VIII_goals.title')}</h2>
            <ul className='list-disc list-inside space-y-1 text-lg'>
              {t
                .raw('VIII_goals.points')
                .map((point: string, index: number) => (
                  <li key={index} className='leading-relaxed'>
                    {point}
                  </li>
                ))}
            </ul>
          </section>

          {/* IX. Our Faith */}
          <section id='IX_ourFaith' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('IX_ourFaith.title')}
            </h2>
            <ul className='list-inside space-y-1 text-lg mb-4'>
              {t.raw('IX_ourFaith.credo').map((item: string, index: number) => (
                <li key={index} className='leading-relaxed'>
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className='border-gray-300 text-lg mb-4'>
              {t('IX_ourFaith.quote')}
            </blockquote>
            <p className='text-lg italic'>{t('IX_ourFaith.practice')}</p>
          </section>

          {/* X. Where Praxiotheism term comes from */}
          <section id='X_originOfTerm' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('X_originOfTerm.title')}
            </h2>
            <div className='space-y-2 text-lg'>
              {t
                .raw('X_originOfTerm.parts')
                .map((part: string, index: number) => (
                  <div key={index} className='my-4'>
                    <p className='leading-relaxed font-bold'>
                      {t(`X_originOfTerm.parts.${index}.title`)}
                    </p>
                    <p className='leading-relaxed font-bold'>
                      {t.rich(`X_originOfTerm.parts.${index}.transcription`, {
                        span: (chunks) => (
                          <span className='font-bold'>{chunks}</span>
                        ),
                      })}
                    </p>
                    <p key={index} className='leading-relaxed'>
                      {t.rich(`X_originOfTerm.parts.${index}.description`, {
                        span: (chunks) => (
                          <span className='font-bold'>{chunks}</span>
                        ),
                      })}
                    </p>
                  </div>
                ))}
              <p className='leading-relaxed font-bold'>
                {t('X_originOfTerm.definition')}
              </p>
              <p className='italic'>{t('X_originOfTerm.quote')}</p>
            </div>

            {/* Breakdown */}
            <div className='my-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('X_originOfTerm.Breakdown.title')}
              </h3>
              <ul className='list-disc list-inside space-y-1 mb-3'>
                {t
                  .raw('X_originOfTerm.Breakdown.points')
                  .map((point: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {point}
                    </li>
                  ))}
              </ul>
            </div>
          </section>

          {/* XI. Praxiotheism and Other Religions */}
          <section id='XI_praxiotheismAndOtherReligions' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('XI_praxiotheismAndOtherReligions.title')}
            </h2>

            {/* 1. Meta-Religious Framework */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.I_metaReligiousFramework.title'
                )}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.I_metaReligiousFramework.intro'
                )}
              </p>
              <ul className='list-disc list-inside space-y-1 mb-3'>
                {t
                  .raw(
                    'XI_praxiotheismAndOtherReligions.I_metaReligiousFramework.points'
                  )
                  .map((point: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {point}
                    </li>
                  ))}
              </ul>
              <p className='text-lg leading-relaxed mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.I_metaReligiousFramework.description'
                )}
              </p>
              <p className='text-lg italic'>
                {t(
                  'XI_praxiotheismAndOtherReligions.I_metaReligiousFramework.example'
                )}
              </p>
            </div>

            {/* 2. Every Religion as a Facet */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.II_everyReligionAsFacet.title'
                )}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.II_everyReligionAsFacet.intro'
                )}
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-3'>
                {t
                  .raw(
                    'XI_praxiotheismAndOtherReligions.II_everyReligionAsFacet.religions'
                  )
                  .map(
                    (
                      religion: { name: string; focus: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className='border border-gray-300 p-3 rounded'
                      >
                        <p className='font-bold'>{religion.name}</p>
                        <p className='italic'>{religion.focus}</p>
                      </div>
                    )
                  )}
              </div>
              <p className='text-lg leading-relaxed'>
                {t(
                  'XI_praxiotheismAndOtherReligions.II_everyReligionAsFacet.conclusion'
                )}
              </p>
            </div>

            {/* 3. Three Ways to Engage */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.III_threeWaysToEngage.title'
                )}
              </h3>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr>
                      <th className='border border-gray-300 text-left p-2 font-bold'>
                        Mode
                      </th>
                      <th className='border border-gray-300 text-left p-2 font-bold'>
                        Description
                      </th>
                      <th className='border border-gray-300 text-left p-2 font-bold'>
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t
                      .raw(
                        'XI_praxiotheismAndOtherReligions.III_threeWaysToEngage.modes'
                      )
                      .map(
                        (
                          mode: {
                            mode: string;
                            description: string;
                            example: string;
                          },
                          index: number
                        ) => (
                          <tr key={index}>
                            <td className='border border-gray-300 p-2 font-bold'>
                              {mode.mode}
                            </td>
                            <td className='border border-gray-300 p-2'>
                              {mode.description}
                            </td>
                            <td className='border border-gray-300 p-2 italic'>
                              {mode.example}
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Praxiotheism as a Diplomatic Hub */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XI_praxiotheismAndOtherReligions.IV_diplomaticHub.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.IV_diplomaticHub.description'
                )}
              </p>
              <p className='text-lg italic mb-3'>
                {t('XI_praxiotheismAndOtherReligions.IV_diplomaticHub.example')}
              </p>
              <p className='text-lg leading-relaxed'>
                {t(
                  'XI_praxiotheismAndOtherReligions.IV_diplomaticHub.conclusion'
                )}
              </p>
            </div>

            {/* 5. Guarding against fundamentalism */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.V_guardingAgainstFundamentalism.title'
                )}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.V_guardingAgainstFundamentalism.warning'
                )}
              </p>
              <p className='text-lg leading-relaxed mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.V_guardingAgainstFundamentalism.danger'
                )}
              </p>
              <p className='text-lg leading-relaxed mb-3'>
                {t(
                  'XI_praxiotheismAndOtherReligions.V_guardingAgainstFundamentalism.ethics'
                )}
              </p>
              <blockquote className='border-l-4 border-gray-300 pl-4 text-lg italic'>
                {t(
                  'XI_praxiotheismAndOtherReligions.V_guardingAgainstFundamentalism.quote'
                )}
              </blockquote>
            </div>
          </section>

          {/* XII. Praxiotheism on the Afterlife */}
          <section id='XII_afterlife' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('XII_afterlife.title')}
            </h2>

            {/* 1. Death as a Shift from Solid to Fluid */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XII_afterlife.I_deathAsShift.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XII_afterlife.I_deathAsShift.intro')}
              </p>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XII_afterlife.I_deathAsShift.description')}
              </p>
              <blockquote className='border-l-4 border-gray-300 pl-4 text-lg italic'>
                {t('XII_afterlife.I_deathAsShift.quote')}
              </blockquote>
            </div>

            {/* 2. No Heaven or Hell—just your mirror for activated patterns */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XII_afterlife.II_noHeavenHell.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XII_afterlife.II_noHeavenHell.intro')}
              </p>
              <ul className='list-disc list-inside space-y-1 mb-3'>
                {t
                  .raw('XII_afterlife.II_noHeavenHell.patterns')
                  .map((pattern: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {pattern}
                    </li>
                  ))}
              </ul>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XII_afterlife.II_noHeavenHell.conclusion')}
              </p>
              <blockquote className='border-l-4 border-gray-300 pl-4 text-lg italic'>
                {t('XII_afterlife.II_noHeavenHell.quote')}
              </blockquote>
            </div>

            {/* 3. Reincarnation? Not always a straight line */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XII_afterlife.III_reincarnation.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XII_afterlife.III_reincarnation.intro')}
              </p>
              <ul className='list-disc list-inside space-y-1'>
                {t
                  .raw('XII_afterlife.III_reincarnation.types')
                  .map((type: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {type}
                    </li>
                  ))}
              </ul>
            </div>

            {/* 4. Afterlife practices */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XII_afterlife.IV_afterlifePractices.title')}
              </h3>
              <ul className='list-disc list-inside space-y-1'>
                {t
                  .raw('XII_afterlife.IV_afterlifePractices.practices')
                  .map(
                    (
                      practice: { name: string; description: string },
                      index: number
                    ) => (
                      <li key={index} className='leading-relaxed font-bold'>
                        {practice.name} — {practice.description}
                      </li>
                    )
                  )}
              </ul>
            </div>

            {/* 5. Syncing with Other Traditions */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XII_afterlife.V_syncingTraditions.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XII_afterlife.V_syncingTraditions.intro')}
              </p>
              <p className='text-lg leading-relaxed'>
                {t('XII_afterlife.V_syncingTraditions.conclusion')}
              </p>
            </div>

            {/* Short version */}
            <div className='mt-8'>
              <blockquote className='border-l-4 border-gray-300 pl-4 text-lg italic font-bold'>
                {t('XII_afterlife.shortVersion')}
              </blockquote>
            </div>
          </section>

          {/* XIII. Good and evil in Praxiotheism */}
          <section id='XIII_goodAndEvil' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('XIII_goodAndEvil.title')}
            </h2>

            {/* 1. No universal scorecard */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XIII_goodAndEvil.I_noUniversalScorecard.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIII_goodAndEvil.I_noUniversalScorecard.intro')}
              </p>
              <ul className='list-disc list-inside space-y-1 mb-3'>
                {t
                  .raw('XIII_goodAndEvil.I_noUniversalScorecard.reasons')
                  .map((reason: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {reason}
                    </li>
                  ))}
              </ul>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIII_goodAndEvil.I_noUniversalScorecard.conclusion')}
              </p>
              <p className='text-lg italic'>
                {t('XIII_goodAndEvil.I_noUniversalScorecard.example')}
              </p>
            </div>

            {/* 2. The key: alignment of choice, action, and meaning */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XIII_goodAndEvil.II_keyAlignment.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIII_goodAndEvil.II_keyAlignment.good')}
              </p>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIII_goodAndEvil.II_keyAlignment.evil')}
              </p>
              <ul className='list-disc list-inside space-y-1 mb-3'>
                {t
                  .raw('XIII_goodAndEvil.II_keyAlignment.evilPoints')
                  .map((point: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {point}
                    </li>
                  ))}
              </ul>
              <blockquote className='border-l-4 border-gray-300 pl-4 text-lg italic mb-3'>
                {t('XIII_goodAndEvil.II_keyAlignment.quote')}
              </blockquote>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIII_goodAndEvil.II_keyAlignment.formula')}
              </p>
              <p className='text-lg font-bold mb-2'>
                {t('XIII_goodAndEvil.II_keyAlignment.goodFormula')}
              </p>
              <p className='text-lg font-bold'>
                {t('XIII_goodAndEvil.II_keyAlignment.evilFormula')}
              </p>
            </div>

            {/* 3. Examples in Praxiotheist logic */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XIII_goodAndEvil.III_examples.title')}
              </h3>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr>
                      {t
                        .raw('XIII_goodAndEvil.III_examples.table.headers')
                        .map((header: string, index: number) => (
                          <th
                            key={index}
                            className='border border-gray-300 text-left p-2 font-bold'
                          >
                            {header}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t
                      .raw('XIII_goodAndEvil.III_examples.table.rows')
                      .map((row: any, index: number) => (
                        <tr key={index}>
                          <td className='border border-gray-300 p-2'>
                            {row.situation}
                          </td>
                          <td className='border border-gray-300 p-2 italic'>
                            {row.standard}
                          </td>
                          <td className='border border-gray-300 p-2'>
                            {row.praxiotheist}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* XIV. Practices for judging actions */}
          <section id='XIV_practicesForJudging' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              {t('XIV_practicesForJudging.title')}
            </h2>

            {/* 1. Facet Feedback Ritual */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XIV_practicesForJudging.I_facetFeedbackRitual.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIV_practicesForJudging.I_facetFeedbackRitual.intro')}
              </p>
              <ul className='list-disc list-inside space-y-1'>
                {t
                  .raw(
                    'XIV_practicesForJudging.I_facetFeedbackRitual.questions'
                  )
                  .map((question: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {question}
                    </li>
                  ))}
              </ul>
            </div>

            {/* 2. Ethical Pentagon */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XIV_practicesForJudging.II_ethicalPentagon.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIV_practicesForJudging.II_ethicalPentagon.intro')}
              </p>
              <ul className='list-disc list-inside space-y-1'>
                {t
                  .raw('XIV_practicesForJudging.II_ethicalPentagon.points')
                  .map((point: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {point}
                    </li>
                  ))}
              </ul>
            </div>

            {/* 3. Goal of Praxiotheist ethics */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XIV_practicesForJudging.III_goal.title')}
              </h3>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIV_practicesForJudging.III_goal.intro')}
              </p>
              <p className='text-lg leading-relaxed mb-3'>
                {t('XIV_practicesForJudging.III_goal.butToBe')}
              </p>
              <ul className='list-disc list-inside space-y-1 mb-3'>
                {t
                  .raw('XIV_practicesForJudging.III_goal.qualities')
                  .map((quality: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {quality}
                    </li>
                  ))}
              </ul>
              <blockquote className='border-l-4 border-gray-300 pl-4 text-lg italic'>
                {t('XIV_practicesForJudging.III_goal.quote')}
              </blockquote>
            </div>
          </section>

          {/* XV. Notes */}
          <section id='XV_notes' className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>{t('XV_notes.title')}</h2>

            {/* 1) Praxiotheism is a language where lying doesn't work */}
            <div className='mb-6'>
              <h3 className='text-xl font-semibold mb-3'>
                {t('XV_notes.I_languageWhereLyingDoesntWork.title')}
              </h3>
              <ul className='list-disc list-inside space-y-1'>
                {t
                  .raw('XV_notes.I_languageWhereLyingDoesntWork.points')
                  .map((point: string, index: number) => (
                    <li key={index} className='leading-relaxed'>
                      {point}
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Table of Contents - Desktop */}
        <div className='hidden lg:block w-64 flex-shrink-0'>
          <div className='sticky top-18'>
            <TableOfContents />
          </div>
        </div>
      </div>

      {/* Scroll to top button - Mobile only */}
      <ScrollToTopButton />
    </div>
  );
}
