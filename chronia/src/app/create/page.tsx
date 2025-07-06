"use client";

import type React from "react";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  ArrowLeft,
  Plus,
  X,
  CodeIcon,
  ImageIcon,
  Bold,
  Italic,
  List,
  ListOrdered,
} from "lucide-react";

export default function CreateBlogPage() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const insertAtCursor = (text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newContent =
      content.substring(0, start) + text + content.substring(end);

    setContent(newContent);

    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  const wrapSelection = (before: string, after: string = before) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const newText = before + selectedText + after;
    const newContent =
      content.substring(0, start) + newText + content.substring(end);

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      if (selectedText) {
        textarea.setSelectionRange(start + before.length, end + before.length);
      } else {
        textarea.setSelectionRange(
          start + before.length,
          start + before.length
        );
      }
    }, 0);
  };

  const insertCodeBlock = (language = "plaintext") => {
    const codeBlock = `\n\`\`\`${language}\n// Your code here\n\`\`\`\n`;
    insertAtCursor(codeBlock);
  };

  const insertImage = () => {
    const imageMarkdown = `\n![Alt text](https://example.com/image.jpg "Optional title")\n`;
    insertAtCursor(imageMarkdown);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you'd upload to a service like Vercel Blob or Cloudinary
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        const imageMarkdown = `\n![${file.name}](${imageUrl})\n`;
        insertAtCursor(imageMarkdown);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/home"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">
                  Create New Post
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">Save Draft</Button>
              <Button>Publish</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Write Your Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base font-medium">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter your blog post title..."
                    className="text-lg"
                  />
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <Label htmlFor="excerpt" className="text-base font-medium">
                    Excerpt
                  </Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Write a brief description of your post..."
                    className="resize-none"
                    rows={3}
                  />
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label className="text-base font-medium">Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Add a tag..."
                      className="flex-1"
                    />
                    <Button onClick={addTag} size="sm" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Editor Toolbar */}
                <div className="space-y-2">
                  <Label className="text-base font-medium">Content</Label>
                  <div className="border rounded-lg">
                    {/* Toolbar */}
                    <div className="flex flex-wrap items-center gap-1 p-3 border-b bg-gray-50">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => wrapSelection("**")}
                        title="Bold"
                      >
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => wrapSelection("*")}
                        title="Italic"
                      >
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => wrapSelection("`")}
                        title="Inline Code"
                      >
                        <CodeIcon className="h-4 w-4" />
                      </Button>

                      <div className="w-px h-6 bg-gray-300 mx-1" />

                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => insertAtCursor("\n- ")}
                        title="Bullet List"
                      >
                        <List className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => insertAtCursor("\n1. ")}
                        title="Numbered List"
                      >
                        <ListOrdered className="h-4 w-4" />
                      </Button>

                      <div className="w-px h-6 bg-gray-300 mx-1" />

                      <Select onValueChange={(value) => insertCodeBlock(value)}>
                        <SelectTrigger className="w-auto h-8">
                          <CodeIcon className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Code Block" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="plaintext">Plain Text</SelectItem>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="typescript">TypeScript</SelectItem>
                          <SelectItem value="python">Python</SelectItem>
                          <SelectItem value="java">Java</SelectItem>
                          <SelectItem value="css">CSS</SelectItem>
                          <SelectItem value="html">HTML</SelectItem>
                          <SelectItem value="bash">Bash</SelectItem>
                          <SelectItem value="sql">SQL</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                        </SelectContent>
                      </Select>

                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={insertImage}
                        title="Insert Image URL"
                      >
                        <ImageIcon className="h-4 w-4" />
                      </Button>

                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          title="Upload Image"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          title="Upload Image"
                        >
                          <ImageIcon className="h-4 w-4" />
                          <Plus className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>

                    {/* Content Editor */}
                    <Textarea
                      ref={textareaRef}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Start writing your blog post... 

Use Markdown syntax:
- **bold text** or *italic text*
- `inline code`
- # Heading 1
- ## Heading 2
- [link text](url)
- ![image alt](image-url)"
                      className="min-h-[500px] resize-none border-0 focus-visible:ring-0 font-mono text-sm"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 pt-6 border-t">
                  <Button variant="outline" asChild>
                    <Link href="/home">Cancel</Link>
                  </Button>
                  <Button variant="outline">Save Draft</Button>
                  <Button>Publish Post</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {content ? (
                    <div className="whitespace-pre-wrap break-words text-sm">
                      {content.split("\n").map((line, index) => {
                        // Basic markdown preview
                        if (line.startsWith("# ")) {
                          return (
                            <h1
                              key={index}
                              className="text-lg font-bold mt-4 mb-2"
                            >
                              {line.slice(2)}
                            </h1>
                          );
                        }
                        if (line.startsWith("## ")) {
                          return (
                            <h2
                              key={index}
                              className="text-base font-bold mt-3 mb-2"
                            >
                              {line.slice(3)}
                            </h2>
                          );
                        }
                        if (line.startsWith("```")) {
                          return (
                            <div
                              key={index}
                              className="bg-gray-100 p-2 rounded text-xs font-mono mt-2"
                            >
                              {line}
                            </div>
                          );
                        }
                        if (line.startsWith("- ")) {
                          return (
                            <li key={index} className="ml-4">
                              {line.slice(2)}
                            </li>
                          );
                        }
                        if (line.match(/^\d+\. /)) {
                          return (
                            <li key={index} className="ml-4 list-decimal">
                              {line.replace(/^\d+\. /, "")}
                            </li>
                          );
                        }
                        return (
                          <p key={index} className="mb-2">
                            {line || "\u00A0"}
                          </p>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      Start writing to see preview...
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Markdown Guide */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Markdown Guide</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div>
                  <code># Heading 1</code>
                </div>
                <div>
                  <code>## Heading 2</code>
                </div>
                <div>
                  <code>**bold text**</code>
                </div>
                <div>
                  <code>*italic text*</code>
                </div>
                <div>
                  <code>`inline code`</code>
                </div>
                <div>
                  <code>\`\`\`language</code>
                  <br />
                  code block
                  <br />
                  <code>\`\`\`</code>
                </div>
                <div>
                  <code>- bullet point</code>
                </div>
                <div>
                  <code>1. numbered list</code>
                </div>
                <div>
                  <code>[link](url)</code>
                </div>
                <div>
                  <code>![image](url)</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
