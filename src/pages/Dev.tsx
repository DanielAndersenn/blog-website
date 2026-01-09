import { useState } from 'react';
import { BlogPost } from '../components/BlogPost';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface ComponentShowcaseProps {
  title: string;
  children: React.ReactNode;
}

function ComponentShowcase({ title, children }: ComponentShowcaseProps) {
  return (
    <section className="component-showcase">
      <h2>{title}</h2>
      <div className="component-demo">{children}</div>
    </section>
  );
}

export function Dev() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="dev-page">
      <header className="dev-header">
        <h1>Component Library</h1>
        <p>Development workspace for UI components</p>
      </header>

      <main className="dev-content">
        <ComponentShowcase title="Button">
          <div className="component-variants">
            <div>
              <h4>Variants</h4>
              <div className="button-row">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>
            <div>
              <h4>Sizes</h4>
              <div className="button-row">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </div>
            <div>
              <h4>Interactive</h4>
              <Button onClick={() => setClickCount((c) => c + 1)}>
                Clicked {clickCount} times
              </Button>
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Card">
          <div className="card-grid">
            <Card title="Simple Card">
              <p>This is a basic card with some content inside.</p>
            </Card>
            <Card title="Card with Button">
              <p>Cards can contain other components.</p>
              <Button variant="secondary" size="small">
                Action
              </Button>
            </Card>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="BlogPost">
          <BlogPost
            id={1}
            title="Sample Blog Post"
            excerpt="This is how a blog post component looks when rendered."
            date="2024-01-15"
            author="Developer"
          />
        </ComponentShowcase>
      </main>
    </div>
  );
}
