import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getSimulation } from '@/data/simulations';
import { ChevronLeft } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const simulation = getSimulation(slug);
  if (!simulation) return {};
  return {
    title: locale === 'ru' ? simulation.title.ru : simulation.title.en,
  };
}

export default async function SimulationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const simulation = getSimulation(slug);
  if (!simulation) notFound();

  const t = await getTranslations({ locale, namespace: 'ArchivePage' });
  const ru = locale === 'ru';

  const title = ru ? simulation.title.ru : simulation.title.en;
  const tldr = ru ? simulation.tldr.ru : simulation.tldr.en;
  const scene = ru ? simulation.scene.ru : simulation.scene.en;
  const roleUnfolding = ru ? simulation.roleUnfolding.ru : simulation.roleUnfolding.en;
  const personalResponse = ru ? simulation.personalResponse.ru : simulation.personalResponse.en;
  const aiMirror = ru ? simulation.aiMirror.ru : simulation.aiMirror.en;
  const conclusion = ru ? simulation.conclusion.ru : simulation.conclusion.en;
  const precedentTitle = ru ? simulation.precedent.title.ru : simulation.precedent.title.en;
  const precedentDesc = ru ? simulation.precedent.description.ru : simulation.precedent.description.en;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back */}
      <Link
        href={`/${locale}/archive`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="size-4" />
        {t('backToArchive')}
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-muted-foreground">#{simulation.number}</span>
          <span className="text-xs text-muted-foreground">
            {new Date(simulation.date).toLocaleDateString(
              ru ? 'ru-RU' : 'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-8">{title}</h1>

        {/* TL;DR */}
        <div className="border-l-2 border-foreground/20 pl-5">
          <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">TL;DR</p>
          {tldr.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm text-muted-foreground mb-3 last:mb-0 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Scene */}
      <section className="mb-10">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {ru ? 'Сцена' : 'Scene'}
        </h2>
        <div className="bg-muted/40 rounded-lg p-5">
          {scene.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Dialogue */}
      <section className="mb-10">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
          {ru ? 'Диалог' : 'Dialogue'}
        </h2>
        <div className="flex flex-col gap-4">
          {simulation.dialogue.map((turn, i) => {
            const content = ru ? turn.ru : turn.en;
            const isAI = turn.role === 'ai';
            return (
              <div
                key={i}
                className={`flex gap-3 ${isAI ? '' : 'flex-row-reverse'}`}
              >
                <div className="shrink-0 mt-1">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                    isAI
                      ? 'bg-foreground/10 text-muted-foreground'
                      : 'bg-foreground text-background'
                  }`}>
                    {isAI ? 'AI' : ru ? 'Я' : 'Me'}
                  </span>
                </div>
                <div className={`flex-1 ${isAI ? '' : 'text-right'}`}>
                  <p className="text-sm leading-relaxed">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Role Unfolding */}
      <section className="mb-10">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {ru ? 'Разворачивание внутри роли' : 'Unfolding within the role'}
        </h2>
        {roleUnfolding.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
        ))}
      </section>

      {/* Personal Response */}
      <section className="mb-10">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {ru ? 'Ответ от первого лица' : 'First-person response'}
        </h2>
        {personalResponse.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
        ))}
      </section>

      {/* AI Mirror */}
      <section className="mb-10">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {ru ? 'Зеркало ИИ' : 'AI Mirror'}
        </h2>
        {aiMirror.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
        ))}
      </section>

      {/* Precedent */}
      <section className="mb-10">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {ru ? 'Прецедент' : 'Precedent'}
        </h2>
        <div className="border border-border rounded-xl p-5">
          <h3 className="font-semibold mb-3">{precedentTitle}</h3>
          {precedentDesc.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0 text-muted-foreground">{para}</p>
          ))}
          <div className="mt-5 pt-4 border-t border-border grid grid-cols-1 gap-2 text-xs">
            {[
              { label: ru ? 'Активированная грань' : 'Activated facet', value: ru ? simulation.precedent.activatedFacet.ru : simulation.precedent.activatedFacet.en },
              { label: ru ? 'Форма действия' : 'Form of action', value: ru ? simulation.precedent.actionForm.ru : simulation.precedent.actionForm.en },
              { label: ru ? 'Цена' : 'Price', value: ru ? simulation.precedent.price.ru : simulation.precedent.price.en },
              { label: ru ? 'Следствие' : 'Consequence', value: ru ? simulation.precedent.consequence.ru : simulation.precedent.consequence.en },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-2">
                <span className="text-muted-foreground shrink-0">{label}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-10">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {ru ? 'Заключение' : 'Conclusion'}
        </h2>
        {conclusion.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0 italic">{para}</p>
        ))}
      </section>
    </div>
  );
}
