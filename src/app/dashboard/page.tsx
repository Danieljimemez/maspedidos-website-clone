"use client";

import { useEffect } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import { Menu, Bell, Settings, LogOut, Plus, TrendingUp, Users, ShoppingBag } from "lucide-react";

export default function DashboardPage() {
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error("Error al cerrar sesión");
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
      toast.success("Sesión cerrada exitosamente");
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-neutral-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const stats = [
    {
      label: "Pedidos hoy",
      value: "24",
      icon: ShoppingBag,
      change: "+12%",
      trend: "up",
    },
    {
      label: "Ventas totales",
      value: "$8,450",
      icon: TrendingUp,
      change: "+18%",
      trend: "up",
    },
    {
      label: "Clientes nuevos",
      value: "15",
      icon: Users,
      change: "+5%",
      trend: "up",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center hover:opacity-60 transition-opacity">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/horizontal-imagotype-1.svg"
                  alt="Maspedidos"
                  width={140}
                  height={24}
                />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
                <Bell className="w-5 h-5 text-neutral-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
                <Settings className="w-5 h-5 text-neutral-600" />
              </button>
              <div className="flex items-center gap-3 ml-2 pl-3 border-l border-neutral-200">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-neutral-800">
                    {session.user.name}
                  </p>
                  <p className="text-xs text-neutral-600">{session.user.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                  title="Cerrar sesión"
                >
                  <LogOut className="w-5 h-5 text-neutral-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-neutral-800 mb-2">
            ¡Bienvenido de vuelta, {session.user.name?.split(" ")[0]}!
          </h1>
          <p className="text-neutral-600">
            Aquí está un resumen de tu restaurante hoy
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-semibold text-neutral-800">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-neutral-800 mb-4">
            Acciones rápidas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 hover:border-primary hover:bg-green-50 transition-colors group">
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <Plus className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
              <span className="font-medium text-neutral-700 group-hover:text-primary">
                Nuevo producto
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 hover:border-primary hover:bg-green-50 transition-colors group">
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <Menu className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
              <span className="font-medium text-neutral-700 group-hover:text-primary">
                Editar menú
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 hover:border-primary hover:bg-green-50 transition-colors group">
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <ShoppingBag className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
              <span className="font-medium text-neutral-700 group-hover:text-primary">
                Ver pedidos
              </span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 hover:border-primary hover:bg-green-50 transition-colors group">
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <Settings className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
              <span className="font-medium text-neutral-700 group-hover:text-primary">
                Configuración
              </span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-800 mb-4">
            Actividad reciente
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Nuevo pedido #1234",
                time: "Hace 5 minutos",
                type: "order",
              },
              {
                title: "Producto actualizado: Pizza Margarita",
                time: "Hace 1 hora",
                type: "update",
              },
              {
                title: "Nuevo cliente registrado",
                time: "Hace 2 horas",
                type: "customer",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-neutral-800">{activity.title}</p>
                  <p className="text-sm text-neutral-600">{activity.time}</p>
                </div>
                <button className="text-primary hover:underline text-sm font-medium">
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
