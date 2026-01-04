"use client"
import React from 'react';
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

const signInSchema = z.object({
    email: z.string().email(""),
    password: z.string().min(6, ""),
});

const Page = () => {
    const { toast } = useToast(); // Destructure to avoid naming conflict
    const router = useRouter();
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signInSchema>) => {
        const signInData = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        
        if (signInData?.error) {
            toast({
                title: "Sign In Failed",
                description: "User doesn't Exist",
                variant: 'destructive',
            });
        } else {
            router.push('/');
            router.refresh();
        }
    };

    return ( 
        <div>
            <nav className="bg-amber-800 shadow-md">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 text-3xl font-bold text-white">
                                Bakiezza
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto">
                            <a href="/" className="text-white px-3 text-lg font-medium hover:underline underline-offset-4">Home</a>
                            <a href="/contact" className="text-white text-lg font-medium hover:underline underline-offset-4">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='backgroundContainer'>
                <div className="signUpWrapper">
                    <div className="formWrapper">
                        <div className="left">
                            <h3 className="title">Hello, Friends!</h3>
                            <p>Enter your personal details and start journey with us</p>
                            <Link href={"/signup"}>
                                <Button className='border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:bg-amber-950 bg-orange-950 hover:text-zinc-100 transition-colors border rounded-full px-8'>Sign Up</Button>
                            </Link>
                        </div>
                        <div className="right">
                            <h3 className='text-center text-2xl font-semibold text-amber-900'>Sign In Here</h3>
                            <div className="socialSignUpOptions">
                                <Button variant={"outline"} className='socialFormBtn'><FaGoogle /></Button>
                                <Button variant={"outline"} className='socialFormBtn'><FaFacebook /></Button>
                                <Button variant={"outline"} className='socialFormBtn'><FaGithub /></Button>
                            </div>
                            <p className='text-center'>or use this option</p>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className='space-y-0 mb-2'>
                                                <FormLabel htmlFor="email">Email</FormLabel>
                                                <FormControl>
                                                    <Input id="email" placeholder="admin@example.com" {...form.register("email")} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className='space-y-0 mb-2'>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="********" type='password' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className='w-full hover:bg-orange-950 bg-amber-800'>Submit</Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
