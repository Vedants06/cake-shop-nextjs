"use client";
import React from 'react';
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const signUpSchema = z.object({
    username: z.string()
        .min(2, "Name should have at least 2 characters.")
        .max(50, "Name should not exceed 50 characters.")
        .regex(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/, 'Name should contain only alphabets.'),
    email: z.string().email("Email must be valid."),
    password: z.string().min(6, "Password should have at least 6 characters."),
    confirmPassword: z.string().min(6, "Password should have at least 6 characters.")
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
});

const Page = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const { handleSubmit, control } = form;

    async function onSubmit(values: z.infer<typeof signUpSchema>) {
        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
    
            if (response.ok) {
                router.push('/signin');
            } else {
                const errorData = await response.json();
                console.error(errorData.message);
                // Optionally, show the error message to the user
                alert(errorData.message);
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    }

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
                    <div className="formWrapper bg-amber-800">
                        <div className="left">
                            <h3 className="title">Welcome Back!</h3>
                            <p className='py-2'>To stay connected with us, please log in with your personal info.</p>
                            <Link href="/signin">
                                <Button className='border-zinc-500 text-white hover:bg-orange-950 font-semibold bg-red-950 hover:border-zinc-200 hover:text-zinc-100 border rounded-full px-8'>
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                        <div className="right">
                            <h3 className='text-center text-amber-900 text-2xl font-semibold'>Register Here</h3>
                            <div className="socialSignUpOptions">
                                <Button variant="outline" className='socialFormBtn'>
                                    <FaGoogle />
                                </Button>
                                <Button variant="outline" className='socialFormBtn'>
                                    <FaFacebook />
                                </Button>
                                <Button variant="outline" className='socialFormBtn'>
                                    <FaGithub />
                                </Button>
                            </div>
                            <p className='text-center'>or use this option</p>
                            <Form {...form}>
                                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <FormItem className='space-y-0 mb-2'>
                                        <FormLabel htmlFor="username">Name</FormLabel>
                                        <FormControl>
                                            <Input id="username" placeholder="abc" {...form.register("username")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                    <FormItem className='space-y-0 mb-2'>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <FormControl>
                                            <Input id="email" placeholder="admin@example.com" {...form.register("email")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                    <FormItem className='space-y-0 mb-2'>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <FormControl>
                                            <Input id="password" placeholder="******" type='password' {...form.register("password")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                    <FormItem className='space-y-0 mb-2'>
                                        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input id="confirmPassword" placeholder="******" type='password' {...form.register("confirmPassword")} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                    <Button type="submit" className='w-full hover:bg-orange-950 bg-amber-800'>
                                        Submit
                                    </Button>
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
