import Image from 'next/image';

import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="">
      <Input variant="search" type="text" />
      <Button variant="create">추가하기</Button>
    </div>
  );
}
