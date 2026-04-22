import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { DesignSystemLanding } from './DesignSystemLanding';
import { DocsLayout } from './layouts/DocsLayout';
import { NotFound } from './NotFound';

const DocsColors = lazy(() => import('./docs/DocsColors').then((m) => ({ default: m.DocsColors })));
const DocsTypography = lazy(() => import('./docs/DocsTypography').then((m) => ({ default: m.DocsTypography })));
const DocsAnimations = lazy(() => import('./docs/DocsAnimations').then((m) => ({ default: m.DocsAnimations })));
const DocsSpace = lazy(() => import('./docs/DocsSpace').then((m) => ({ default: m.DocsSpace })));
const DocsMotifs = lazy(() => import('./docs/DocsMotifs').then((m) => ({ default: m.DocsMotifs })));
const DocsButtons = lazy(() => import('./docs/DocsButtons').then((m) => ({ default: m.DocsButtons })));
const DocsCards = lazy(() => import('./docs/DocsCards').then((m) => ({ default: m.DocsCards })));
const DocsComponents = lazy(() => import('./docs/DocsComponents').then((m) => ({ default: m.DocsComponents })));
const DocsPatterns = lazy(() => import('./docs/DocsPatterns').then((m) => ({ default: m.DocsPatterns })));
const DocsVoice = lazy(() => import('./docs/DocsVoice').then((m) => ({ default: m.DocsVoice })));
const DocsAccessibility = lazy(() =>
  import('./docs/DocsAccessibility').then((m) => ({ default: m.DocsAccessibility })),
);
const DocsFoundations = lazy(() => import('./docs/DocsFoundations').then((m) => ({ default: m.DocsFoundations })));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<DesignSystemLanding />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Navigate to="foundations" replace />} />
          <Route path="colors" element={<DocsColors />} />
          <Route path="typography" element={<DocsTypography />} />
          <Route path="animations" element={<DocsAnimations />} />
          <Route path="motion" element={<Navigate to="/docs/animations" replace />} />
          <Route path="space" element={<DocsSpace />} />
          <Route path="motifs" element={<DocsMotifs />} />
          <Route path="buttons" element={<DocsButtons />} />
          <Route path="cards" element={<DocsCards />} />
          <Route path="components" element={<DocsComponents />} />
          <Route path="patterns" element={<DocsPatterns />} />
          <Route path="voice" element={<DocsVoice />} />
          <Route path="accessibility" element={<DocsAccessibility />} />
          <Route path="foundations" element={<DocsFoundations />} />
          <Route path="surfaces" element={<Navigate to="/docs/patterns" replace />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
