import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
  <div>
    Hello World
    <div className="flex gap-4">
      <Input></Input>
    <Button variant="primary" size="default">Primary</Button>
    <Button variant="secondary" size="default">Secondary</Button>
    <Button variant="destructive" size="default">Destructive</Button>
    <Button variant="ghost" size="default">Ghost</Button>
    <Button variant="muted" size="default">Muted</Button>
    <Button variant="outline" size="default">Outline</Button>
    <Button variant="territorial" size="default">Territorial</Button>
    </div>

  </div>
  );
}
