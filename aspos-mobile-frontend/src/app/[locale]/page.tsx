
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <div>
        Hi guys
      </div>
    </div>
  );
}
